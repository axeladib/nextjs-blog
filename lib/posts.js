import fs from "fs";
import path from "path";
import matter from "gray-matter";

// return the posts directory or folder
const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  //Check all the files in the directory to find the /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    //Concatenate the directory and the filename resulting the **posts/pre-rendering** withoud the .md
    const fullPath = path.join(postsDirectory, fileName);
    //readFileSync => Read the data => text, symbools in the file specifies in fullpath in the format of utf8
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    //return objects
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
