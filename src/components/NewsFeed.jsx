import React from 'react';

function NewsFeed() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-6 text-center">News Feed</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Post Title</h3>
          <p className="text-gray-700">This is a sample post content.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Another Post</h3>
          <p className="text-gray-700">Here is another example of a post.</p>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
