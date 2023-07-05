import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="dearborn News"
          des=" this website provide latest events and news of the cities of Dearborn, Dearborn Heights, and the Detroit metro area."
          isNext
          isTailwind
          isCss
          isOnline
          onlineURL="https://dearborn.org/"
        />
        <ProjectsCard
          title="Junkkers"
          des=" A web app to sell your junk car for the highst price possible, Provide detailed information about vehicle ,You can also upload photos to give buyers a better idea of the car's appearance."
          isNext
          isTailwind
          isCss
          isOnline
          grid={2}
          onlineURL="https://junkker.com/"
        />
        <ProjectsCard
          title="Spantrek"
          des="A Workplace Institution Management is a tool used to organize and control the different aspects of a workplace, such as devices, communication channels, locations, floor plans, and reservations. The app can connect with Google Calendar, Microsoft Calendar, and Cisco Spaces to synchronize the resources. It enables businesses to share targeted and interesting content with their employees, customers, or visitors through digital platforms. The platform has various features including creating and managing content, setting schedules, analyzing data, and integrating with other business systems. Spantrek offers a user-friendly interface where users can easily create and design multimedia content such as images, videos, slideshows, webpages, and interactive applications."
          isNx
          isVite
          isGraph
          isReact
          isTailwind
          images={[
            "/img/spantrek-1.png",
            "/img/spantrek-2.png",
            "/img/spantrek-3.png",
            "/img/spantrek-4.png",
            "/img/spantrek-5.png",
            "/img/spantrek-6.png",
            "/img/spantrek-7.png",
            "/img/spantrek-8.png",
            "/img/spantrek-9.png",
            "/img/spantrek-10.png",
            "/img/spantrek-11.png",
          ]}
        />
        <ProjectsCard
          title="Room booking template"
          des="Template for Spantrek that allows you to scan your RFID card to unlock a room. you can check your reservation and see others other people reservation in the room. If needed, you can create a new reservation or make changes to your existing reservation, such as updating or canceling it. When you're done, you have the option to log out and exit the system."
          isNx
          isVite
          isGraph
          isReact
          isTailwind
          images={[
            "/img/room-booking-1.png",
            "/img/room-booking-2.png",
            "/img/room-booking-3.png",
            "/img/room-booking-4.png",
            "/img/room-booking-5.png",
          ]}
        />
        <ProjectsCard
          title="Ferm  "
          des="project for FAO allows users to search for and view practice materials. The platform offers options to print or download the content as a PDF. It provides a convenient way to access and utilize practice resources effectively. The FAO project enhances accessibility and usability of practice materials for users."
          isNx
          isNext
          isReact
          isTailwind
          images={[
            "/img/ferm1.png",
            "/img/ferm2.png",
            "/img/ferm3.png",
            "/img/ferm4.png",
            "/img/ferm5.png",
            "/img/ferm6.png",
            "/img/ferm7.png",
            "/img/ferm8.png",
          ]}
        />
        <ProjectsCard
          title="Junkkers Dashboard"
          isNext
          isTailwind
          isCss
          des="Junkker's admin dashboard is designed for manage buyers and sellers and handle various aspects of the website. It allows administrators to control and organize information that appears on the website, such as the home slider, FAQ section, and blog. Additionally, the dashboard enables admin to manage bid settings efficiently."
          isOnline
          onlineURL="https://cms.junkker.com/"
          images={[
            "/img/junkker-1.png",
            "/img/junkker-2.png",
            "/img/junkker-3.png",
            "/img/junkker-4.png",
            "/img/junkker-5.png",
            "/img/junkker-6.png",
            "/img/junkker-7.png",
            "/img/junkker-8.png",
          ]}
        />
        <ProjectsCard
          title="E-commerce Website (Choice)"
          des="web-based e-commerce app provides a seamless platform for managing online shopping. offering flexibility. The app features cart management, user profiles, order tracking, and product variations. Integration with Stripe ensures secure payment processing."
          images={[
            "/img/choice1.png",
            "/img/choice2.png",
            "/img/choice3.png",
            "/img/choice4.png",
            "/img/choice6.png",
            "/img/choice7.png",
            "/img/choice8.png",
            "/img/choice9.png",
            "/img/choice10.png",
            "/img/choice11.png",
            "/img/choice12.png",
            "/img/choice13.png",
            "/img/choice14.png",
          ]}
          grid={2}
          isNext
          isReact
          isTailwind
        />

        <ProjectsCard
          title="E-commerce Website (the wholeSale)"
          des="A web E-commerce app. Manage Cart, profile, Orders , variations etc... you can Register as a Store or as an Individual. We have added stripe payment gateway integration."
          images={[
            "/img/prosale-account.png",
            "/img/prosale-home.png",
            "/img/prosale-main.png",
            "/img/prosale-Products.png",
            "/img/prosale-register.png",
          ]}
          grid={2}
          isNext
          isTailwind
        />
      </div>
    </section>
  );
};

export default Projects;
