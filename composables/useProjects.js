import { ref } from "vue";
import { db } from "@/db";
import { collection, onSnapshot } from "firebase/firestore";

export const useProjectsArr = ref([]);

const projectsCollection = collection(db, "projects");

export function useProjectsData() {
  return onSnapshot(projectsCollection, (snapshot) => {
    useProjectsArr.value = snapshot.docs.map((project) => project.data());
  });
}
