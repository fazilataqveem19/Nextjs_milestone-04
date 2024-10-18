interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
}

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="p-4 space-y-6">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id} className="p-6 border border-gray-200 rounded-lg shadow-md">
            <div className="overflow-hidden rounded-md"> 
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="h-48 w-full object-cover transition-transform duration-150 transform hover:scale-110" // Faster hover effect
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 mt-4">{blog.title}</h2> 
            <p className="text-lg text-gray-800 mb-4 mt-1">{blog.content}</p> 
            <small className="text-base text-gray-700"> 
              Written by {blog.author} on {blog.date}
            </small>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default BlogList;