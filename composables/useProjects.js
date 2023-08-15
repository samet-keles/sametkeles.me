import { ref } from "vue";
import { db } from "@/db";
import { collection, onSnapshot } from "firebase/firestore";

const UseProjectsArr = ref([]);

const projectsCollection = collection(db, "projects");

export function useProjectsData() {
  return onSnapshot(projectsCollection, (snapshot) => {
    UseProjectsArr.value = snapshot.docs.map((project) => project.data());
  });
}
