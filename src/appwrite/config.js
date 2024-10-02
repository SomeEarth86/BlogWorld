import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {

            return await this.databases.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Error from Creatpost: config.js", error);

        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {

            return await this.databases.updateDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        } catch (error) {
            console.log("Error in Updatepost : config.js", error);

        }

    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Error occured at deletePost: config.js ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
        } catch (error) {
            console.log("Error occured at getPost: config.js", error);
            return false;
        }
    }

    async getAllPost(query = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                query,
                []
            )
        } catch (error) {
            console.log("Error occured at getAllPost : config.js", error);
            return false;
        }
    }

    //file upload service namely upload delete

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Error occurred at uploadFile: config.js", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Error occurred at deleteFile: config.js", error);

        }
    }

    getFile(fileId) {
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    }

}

const service = new Service();

export default service;