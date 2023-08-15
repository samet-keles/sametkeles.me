import { ref } from "vue";
import { db } from "@/db";
import { collection, onSnapshot } from "firebase/firestore";

export const usePostsArr = ref([]);

const postsCollection = collection(db, "posts");

export function usePostsData() {
  return onSnapshot(postsCollection, (snapshot) => {
    usePostsArr.value = snapshot.docs.map((post) => post.data());
  });
}
