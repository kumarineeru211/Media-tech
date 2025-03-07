import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./FeatureSection.css"

const faqs = [
  { question: "How is Media+ beneficial for Marketers?", answer: "Media+ helps marketers by providing tools for content distribution, analytics, and audience engagement." },
  { question: "How does Media+ improve user retention, engagement & help in generating more leads?", answer: "Media+ offers AI-powered recommendations, analytics, and automation tools to keep users engaged." },
  { question: "How does Media+ result in better brand visibility?", answer: "It enhances brand visibility by optimizing content reach through SEO and AI-driven insights." },
  { question: "How does Media+ simplify video content management?", answer: "Media+ provides a user-friendly dashboard for video uploads, categorization, and seamless playback." },
  { question: "How does Media+ use AI to improve content discovery?", answer: "AI-driven algorithms analyze user behavior and suggest relevant content." },
  { question: "What kind of analytics does Media+ provide?", answer: "Media+ offers detailed insights on user engagement, retention, and content performance." },
  { question: "Can Media+ integrate with my existing MAP tools like Hubspot?", answer: "Yes, Media+ supports integration with major marketing automation tools like Hubspot and Marketo." },
  { question: "How many videos can I host on one Media+ site?", answer: "The number of videos depends on your subscription plan, ranging from 100 to unlimited storage options." }
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div  className = "faqwidth" style={{  margin: "auto", padding: "20px", }}>
      <Typography variant="h6" align="center" gutterBottom style={{ fontWeight: "bold", color: "#FF5722" }}>
        Our top-list of commonly asked questions
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        FAQs
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} expanded={expanded === index} onChange={() => handleChange(index)}>
          <AccordionSummary
            expandIcon={
              <IconButton>
                {expanded === index ? <RemoveIcon /> : <AddIcon />}
              </IconButton>
            }
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQSection;
