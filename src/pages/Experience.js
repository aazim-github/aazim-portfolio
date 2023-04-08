import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { SchoolRounded } from "@material-ui/icons";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolRounded />}
        >
          <h3 className="vertical-timeline-element-title">
            Al-Kabir Polytechnic, Jamshedpur, Jharkhand
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            High Scool Diploma
          </h4>

          <p> Automobile Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            KIIT University, Bhubaneswar, Odisha
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Mechanical Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            QSpiders, Bangalore, Karnataka
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            SDET
          </h4>

          <p> Automation Engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Engineer - Aptean
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore, Karnataka
          </h4>
          <p>--- Knowledge on Azure Kubernetes, Containers, Container Registries, Container Orchestration, Nodes, Pods, Workloads, Services, Storage and Persistence.<br/>
            --- Exposure to Azure Cloud, Kubernetes, Docker, Containerization, Virtualization, Lens IDE, Azure CLI, kubectl, CI/CD.<br/>
            --- Manage full application stacks with Azure cloud-based computing environments.<br/>
            --- Supported production environment including monitoring application, resolving any production-related, and functional issues.<br/>
            --- Improved monitoring process and regular maintenance checks which in turn reduced server downtime.<br/>
            --- Involved in setting up test environments from scratch on AKS having same configuration as production environments.<br/>
            --- Experience in updating components parameters in K8s YAML configuration file for a Kubernetes namespaces.<br/>
            --- Knowledge on applying SSL certificates in the test & production environment.<br/>
            --- Developed a bash script which can be executed to take thread & heap dumps for every specified set of interval of time.<br/>
            --- Exposure on setting up build pipeline configured to run scheduled performance test using PowerShell & Python scripts.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
