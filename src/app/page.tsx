"use client"; 

import { useEffect, useState } from "react"; 
import { useSession } from "next-auth/react"; 
import Banner from "@/components/Banner";
import BannerBottom from "@/components/BannerBottom";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import UserBlogs from "@/components/UserBlogs"; 

// Define the Blog type
interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string; 
}

// Home component
export default function Home() {
  const { data: session } = useSession(); 
  const [blogs, setBlogs] = useState<Blog[]>([]); 

  useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch('/api/blogs');
      const fetchedBlogs: Blog[] = await response.json();
      setBlogs(fetchedBlogs);
    }
    fetchBlogs();
  }, []); 

  return (
    <div>
      <Banner />
      <BannerBottom />
      <BlogList blogs={blogs} /> 
      {session && <UserBlogs />} 
      <Footer />
    </div>
  );
}
