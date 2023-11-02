"use client";

import styles from "@styles/projects.module.scss";
import project_category from "@data/projects_category";
import ProjectInfo from "@components/ProjectInfo";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { filterProject } from "@features/projects/projectSlice";

const Projectpage = () => {
  const [openProjectCategory, setOpenProjectCategory] = useState(true);

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.filteredProjects);

  const filterProjects = (type) => {
    dispatch(filterProject(type))
  }


  return (
    <main className={styles.wrapper}>
      <h3 className={styles.page_name}>_projects</h3>

      <div className={styles.sidebar}>
        <div className={styles.tab}>
          <input
            checked={openProjectCategory}
            onChange={() => setOpenProjectCategory((prev) => !prev)}
            className={styles.tab_checkbox}
            type="checkbox"
            id="projects"
          />
          <div className={styles.label}>
            <label htmlFor="projects">
              <img
                className={styles.arrow_img}
                src="/icons/arrow.svg"
                alt="arrow"
              />
              projects
            </label>
          </div>
          <div className={styles.tab_content}>
            {project_category.map((project) => {
              return (
                <div key={project.id} className={styles.tab_option}>
                  <input
                    type="checkbox"
                    className={styles.tab_option_input}
                    id={project.id}
                    onClick={() => filterProjects(project.id)}
                  />
                  <label htmlFor={project.id} className={styles.option_details}>
                    <img src="/icons/react.svg" alt="react" />
                    <p>{project.name}</p>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.main_content}>
        <ProjectInfo projects={projects}/>
      </div>
    </main>
  );
};

export default Projectpage;
