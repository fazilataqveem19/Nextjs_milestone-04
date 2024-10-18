"use client"; 
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from 'next/image';

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string; 
}

const UserBlogs = () => {
  const { data: session } = useSession();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [newBlog, setNewBlog] = useState<Blog>({
    id: Date.now(), // Temporary ID generation
    title: "",
    author: session?.user?.name || "Anonymous",
    date: new Date().toISOString().split("T")[0],
    content: "",
    image: "", // Initialize image as empty
  });

  const [isEditing, setIsEditing] = useState(false); // Track whether we're editing a blog

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value })); // Ensure all properties are kept
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBlog((prev) => ({ ...prev, image: reader.result as string })); // Update image
      };
      reader.readAsDataURL(file);
    }
  };

  const addOrUpdateBlog = () => {
    if (newBlog.title && newBlog.content && newBlog.image) {
      setBlogs((prev) => {
        const existingBlogIndex = prev.findIndex(blog => blog.id === newBlog.id);
        if (existingBlogIndex !== -1) {
          // Update existing blog
          const updatedBlogs = [...prev];
          updatedBlogs[existingBlogIndex] = newBlog; // Update the blog in the array
          return updatedBlogs;
        } else {
          // Add as new blog
          return [...prev, { ...newBlog, id: Date.now() }];
        }
      });
      // Reset the newBlog state after adding/updating
      resetNewBlog();
    }
  };

  const resetNewBlog = () => {
    setNewBlog({
      id: Date.now(),
      title: "",
      author: session?.user?.name || "Anonymous",
      date: new Date().toISOString().split("T")[0],
      content: "",
      image: "", // Reset image to empty
    });
    setIsEditing(false); // Reset editing state
  };

  const editBlog = (id: number) => {
    const blogToEdit = blogs.find(blog => blog.id === id);
    if (blogToEdit) {
      setNewBlog(blogToEdit); // Set the newBlog state to the blog being edited
      setIsEditing(true); // Set editing state to true
    }
  };

  const deleteBlog = (id: number) => {
    setBlogs((prev) => prev.filter(blog => blog.id !== id)); // Delete the blog
  };

  return (
    <div className="p-4">
      <div className="p-4 space-y-6">
        {blogs.length > 0 && (
          blogs.map((blog) => (
            <div key={blog.id} className="p-6 border border-gray-200 rounded-lg shadow-md">
              <div className="overflow-hidden rounded-md"> 
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  className="h-48 w-full object-cover transition-transform duration-150 transform hover:scale-110"
                  width={500} // Fixed width
                  height={300} // Fixed height
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 mt-4">{blog.title}</h2> 
              <p className="text-lg text-gray-800 mb-4 mt-1">{blog.content}</p> 
              <small className="text-base text-gray-700"> 
                Written by {blog.author} on {blog.date}
              </small>
              <div className="mt-4">
                <button onClick={() => editBlog(blog.id)} className="bg-yellow-500 text-white p-2 rounded mr-2 transition duration-300 hover:bg-yellow-600">
                  Edit
                </button>
                <button onClick={() => deleteBlog(blog.id)} className="bg-red-500 text-white p-2 rounded transition duration-300 hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Manage Your Blogs</h2>
      <div className="my-4 p-6 border border-gray-300 rounded-lg shadow-md">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          placeholder="Blog Content"
          value={newBlog.content}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full my-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="my-2"
        />
        {newBlog.image && (
          <Image 
            src={newBlog.image} 
            alt="Preview" 
            className="h-48 w-full object-cover rounded mb-4" 
            width={500} // Fixed width
            height={300} // Fixed height
          />
        )}
        <button onClick={addOrUpdateBlog} className="bg-blue-500 text-white p-2 rounded transition duration-300 hover:bg-blue-600">
          {isEditing ? "Update Blog" : "Add Blog"}
        </button>
      </div>
    </div>
  );
};

export default UserBlogs;
