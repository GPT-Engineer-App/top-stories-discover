import React, { useEffect, useState } from "react";
import { Container, Text, VStack, Input, Box, Link, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import axios from "axios";

const Index = () => {
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const topStoriesRes = await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json");
        const topStoryIds = topStoriesRes.data.slice(0, 5);
        const storyPromises = topStoryIds.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
        const storiesRes = await Promise.all(storyPromises);
        const storiesData = storiesRes.map(res => res.data);
        setStories(storiesData);
        setFilteredStories(storiesData);
      } catch (error) {
        console.error("Error fetching top stories:", error);
      }
    };

    fetchTopStories();
  }, []);

  useEffect(() => {
    const filtered = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredStories(filtered);
  }, [searchTerm, stories]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={4} width="100%">
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl">Hacker News Top Stories</Text>
          <IconButton aria-label="Toggle dark mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
        </Box>
        <Input placeholder="Search stories..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        {filteredStories.map(story => (
          <Box key={story.id} p={4} borderWidth="1px" borderRadius="md" width="100%">
            <Text fontSize="xl" fontWeight="bold">{story.title}</Text>
            <Link href={story.url} color="teal.500" isExternal>Read more</Link>
            <Text>Upvotes: {story.score}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;