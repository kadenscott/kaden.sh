import path from 'path'
import fs from 'fs'

const posts = []

const getAllPosts = () => {
    try {
        return fs.readdirSync("./static/files/posts").map((fileName) => {
            const post = fs.readFileSync(
                path.resolve("./static/files/posts", fileName),
                "utf-8"
            );
            return post;
        });
    } catch (e) {
        console.log(e)
        return [];
    }
};

path.join()


/**
 * Returns a list of all blog posts.
 * @param req request
 * @return response
 */
export const get = async (req) => {
    return {body: getAllPosts()};
}