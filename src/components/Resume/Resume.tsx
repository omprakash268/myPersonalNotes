// import React from 'react';

// const Resume = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">
//       <header className="mb-8">
//         <h1 className="text-3xl font-bold">Om Prakash</h1>
//         <p className="text-lg">Software Engineer</p>
//         <p className="text-sm">Experienced in ReactJS and Angular with 2 years of hands-on development...</p>
//       </header>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold">Contact</h2>
//         <p>Delhi, India</p>
//         <p>+8588047356</p>
//         <p>omprakashmaurya26B@gmail.com</p>
//         <p><a href="https://linkedin.com/in/om-prakash-1486bb182">LinkedIn</a></p>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold">Languages</h2>
//         <p>Hindi</p>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold">Education</h2>
//         <p>Bachelor's in Computer Science and Engineering</p>
//         <p>Netaji Subhas University of Technology, East Campus</p>
//         <p>Jan, 2018 - Jan, 2022</p>
//         <p>Diploma in Government Boys Senior Secondary School</p>
//         <p>Jan, 2015 - Jan, 2016</p>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold">Work Experience</h2>
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold">Software Engineer</h3>
//           <p>HashedIn by Deloitte</p>
//           <p>Sep, 2022 - Present</p>
//           <ul className="list-disc list-inside">
//             <li>Worked on various projects utilizing technologies like AngularJS, ReactJS, Tailwind CSS, and TypeScript.</li>
//             <li>Developed reusable components enhancing user interaction and efficiency.</li>
//             <li>Enhanced code quality and reliability by creating unit test suites in React Testing Library (RTL) using Jest...</li>
//             <li>Led UI Development for GenAI Project...</li>
//             <li>Problem-Solving & Challenge Management...</li>
//             <li>Code Quality & Documentation...</li>
//             <li>Developed the Open.Fit UI platform from scratch...</li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
//           <p>Offbeat Entrepreneurs Private Limited</p>
//           <p>May, 2021 - Jun, 2021</p>
//           <ul className="list-disc list-inside">
//             <li>Created user-friendly web pages.</li>
//             <li>Worked on popular technologies like HTML, CSS, JavaScript, etc.</li>
//           </ul>
//         </div>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold">Projects</h2>
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold">Weather Application</h3>
//           <p>Jun, 2023 - Jun, 2023</p>
//           <ul className="list-disc list-inside">
//             <li>Designed a user-friendly interface featuring a prominent search bar and a carousel to display weather data...</li>
//             <li>Implemented Redux Toolkit for efficient state management of weather data...</li>
//             <li>Enhanced user experience by preventing duplicate location searches...</li>
//             <li>Added a recent searches feature using chips...</li>
//           </ul>
//         </div>
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold">To-Do List Application</h3>
//           <p>Sep, 2022 - Dec, 2022</p>
//           <ul className="list-disc list-inside">
//             <li>Created a feature-rich to-do list application using ReactJS and Tailwind CSS.</li>
//             <li>Implemented features like task categorization, due dates, and reminders...</li>
//             <li>Enhanced user experience with a clean and intuitive interface...</li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold">Portfolio Website</h3>
//           <p>Nov, 2022 - Dec, 2022</p>
//           <ul className="list-disc list-inside">
//             <li>Developed a personal portfolio website to showcase projects and skills...</li>
//             <li>Used ReactJS and Tailwind CSS for a responsive and modern design...</li>
//           </ul>
//         </div>
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold">Skills</h2>
//         <ul className="list-disc list-inside">
//           <li>Angular</li>
//           <li>ReactJS</li>
//           <li>Node.js</li>
//           <li>JavaScript</li>
//           <li>TypeScript</li>
//           <li>HTML</li>
//           <li>Tailwind CSS</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Resume;

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-bold">Om Prakash</h1>
        <h2 className="text-2xl text-gray-700">Frontend Developer</h2>
      </header>

      <section className="mb-8">
        <ul className='flex justify-start gap-2 flex-wrap text-[0.9rem]'>
          <li>Phone: 8588047356</li>
          <li>Location: Delhi, India</li>
          <li>Email: omprakashmaurya26B@gmail.com</li>
          <li><a href="https://linkedin.com/in/om-prakash-1486bb182" className="text-blue-600">LinkedIn</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          <li>ReactJS</li>
          <li>Redux</li>
          <li>RTK</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>OOPs</li>
          <li>GIT</li>
          <li>Data Structures and Algorithms</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Achievements</h2>
        <ul className="list-disc list-inside">
          <li>Excellence Award for OperateEdge Project (02/2024 - 05/2024)
            <ul className="list-disc list-inside ml-4">
              <li>Received a Spot Award for exceptional contribution as a frontend developer, demonstrating extreme ownership and delivering high-quality results ahead of schedule.</li>
            </ul>
          </li>
          <li>Top 3 Product Recognition for Open.Fit (10/2022 - 01/2023)
            <ul className="list-disc list-inside ml-4">
              <li>Developed the Open.Fit UI platform from scratch as a frontend developer. The product was selected as one of the top 3 out of 23 products after multiple demo rounds, ultimately winning a prize.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc list-inside">
          <li>Operate Edge (02/2024 - 08/2024)
            <ul className="list-disc list-inside ml-4">
              <li>Independently developed the UI for the Release Management module, featuring the 'Generate New' and 'View Existing' modal and performance report generation.</li>
              <li>Integrated multiple REST APIs across projects, ensuring seamless data retrieval and handling, and optimizations for universal file format support and dynamic responses.</li>
              <li>Implemented comprehensive error handling for email functionalities, API calls, and user inputs, providing clear and actionable error messages to enhance user experience.</li>
              <li>Designed and developed responsive UI components, including the RM landing page, chart history sidebar, and custom tables, ensuring optimal display across all devices and screen sizes.</li>
            </ul>
          </li>
          <li>My Notes (09/2024 - 09/2024)
            <ul className="list-disc list-inside ml-4">
              <li>Developed a responsive and interactive 'My Notes' application using a tech stack of ReactJS, NodeJS, ExpressJS, MongoDB, and Redux Toolkit. The application enhances user experience through a GUI user-friendly design.</li>
              <li>Implemented full CRUD operations (Create, Read, Update, Delete) for managing notes, enabling users to efficiently add, edit, and delete notes for effective task management.</li>
              <li>Utilized Redux Toolkit for state management, including local storage to preserve user notes and authentication data, ensuring a seamless experience across sessions.</li>
              <li>Integrated user authentication features using Firebase, allowing users to securely log in via traditional methods and Google login, enhancing accessibility and user experience.</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
