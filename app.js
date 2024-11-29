const nodemailer = require("nodemailer");

const emails = [
  "info@uhrs.ae",
  "jobs@reachgroup.ae",
  "info@receptionistpa.com",
  "info@manpower-me.com",
  "Contact@nadiaglobal.com",
  "info@pactemployment.ae",
  "recruitment@innovationuae.com",
  "cv@sundusrecruitment.com",
  "info@sundusrecruitment.com",
  "clientmiddleeast@michaelpage.ae",
  "cv@xpertsjobs.com",
  "info@nathanhr.com",
  "adeccoae.info@adecco.com",
  "lobo@lobomanagement.com",
  "recruit@bacme.com",
  "submit@bacme.com",
  "info@sawaeed.ae",
  "horizongroup@horizon.ae",
  "info@mackenziejones.com",
  "info@inspireselection.com",
  "dxbjobs@tascoutsourcing.com",
  "request@tascoutsourcing.com",
  "info@tascoutsourcing.com",
  "enquiries@alnahiya.com",
  "info@admsuae.com",
  "Info@asrs.ae",
  "careers@rawafed.ae",
  "clientmiddleeast@hays.com",
  "corporate.communications@randstad.com",
  "info@akrs.ae",
  "info@almansoorgroup.com",
  "mansoor@emirates.net.ae",
  "jobseekers@jvi-global.com",
  "employers@jvi-global.com",
  "info@executivesolutionsme.com",
  "enquiry@al-thawiya.com",
  "ian.mclean@ssaltd.com",
  "gaile@expertsrecruitment.com",
  "sparkmos@spark.ae",
  "talascend.marketing@talascend.com",
  "info@antal.com",
  "info@derbygroup.ae",
  "info@cig.ae",
  "jobs@alvakil.net",
  "adminmumbai@alvakil.net",
  "mike@kershawleonard.net",
];

const testEmails = ["test1@domain.com", "test2@domain.com", "test3@domain.com"];

const sendEmail = () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "", // Your gmail email
      pass: "", // Your email password or app password
    },
  });

  const subject = "Seeking a Software Developer Position";
  const text = `Dear Recruiter,

I am writing to express my keen interest in software development opportunities at your esteemed agency. My name is Anas Hamdi, and I bring a proven track record in developing innovative and efficient web solutions.

In my previous roles, I have successfully delivered projects using React and I am extremely proficient in Next.js, showcasing my expertise in building responsive and performant applications. My commitment to clean code, attention to detail, and passion for creating seamless user experiences align with your values.

I am confident that my technical proficiency, coupled with my dedication to staying abreast of industry trends, makes me a valuable asset to your clients.

Attached is my CV, which includes my portfolio and GitHub profile. I look forward to the opportunity to discuss how my skills align with your goals.

Thank you for considering my application.

Best regards,  
Anas Hamdi`;
  const html = text.replace(/\n/g, "<br>");

  // Email options
  const mailOptions = {
    from: "John Doe <example@gmail.com>", // Sender address
    subject, // Subject line
    text, // Plain text body
    html, // HTML body
    attachments: [
      {
        filename: "resume.pdf", // File name
        path: "./file_path.pdf", // File path
      },
    ],
  };

  emails?.forEach((email) => {
    // Send the email
    transporter.sendMail({ ...mailOptions, to: email }, (error, info) => {
      if (error) {
        return console.error(`Error: ${error}`);
      }
      console.log(`Message sent: ${info.messageId}`);
    });
  });
};

sendEmail();
