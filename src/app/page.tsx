"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import ContactForm from "./ContactForm";
import NavBar from "./NavBar";
import ServiceCard from "./ServiceCard";

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const HeroContent = styled.div`
  padding: 20px;
  border-radius: 10px;
  z-index: 1;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
`;

const CustomButton = styled.button`
  background-color: #6c9d5f;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a834f;
  }
`;

const ServicesSection = styled.section`
  padding: 50px 20px;
  background-color: #090d0d;
  text-align: center;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavBar(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [heroRef]);

  return (
    <div>
      <NavBar show={showNavBar} />
      <HeroSection ref={heroRef}>
        <HeroVideo autoPlay loop muted>
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
        <HeroContent>
          <h1>Developing Meaningful Experiences</h1>
          <p>
            Whether you’re a burgeoning startup or an established enterprise, I
            am dedicated to delivering exceptional web and software solutions
            tailored to your unique needs. Additionally, I am passionate about
            nurturing the next generation of coding talent through comprehensive
            mentoring programs. Join me on a journey of innovation and growth,
            where excellence meets opportunity.
          </p>
          <CustomButton onClick={handleShow}>Get in Touch</CustomButton>
        </HeroContent>
      </HeroSection>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
      </Modal>

      <ServicesSection>
        <h2>Our Services</h2>
        <ServicesContainer>
          <ServiceCard
            image="/internet.svg"
            title={["Custom", "Responsive", "Website Design"]}
            description="Our Custom Responsive Website Design service offers tailored solutions to meet your unique needs. 
            We specialize in creating visually stunning and user-friendly websites that adapt seamlessly to different devices and screen sizes. 
            Using a combination programming languages and popular frameworks, we ensure that your website not only looks great but also delivers
             an exceptional user experience. Whether you need a simple portfolio site or a complex e-commerce platform, we’ve got you covered. 
             Let us bring your vision to life on the web."
            buttonText="bi bi-chevron-right"
          />
          <ServiceCard
            image="/software.svg"
            title={["Custom", "Full-Cycle", "Development"]}
            description="Our Custom Full-Cycle Development service offers end-to-end solutions for your software needs. 
            From conceptualization and design to development, testing, and deployment, we handle every aspect of the development process.
            Using a variety of programming languages and frameworks, we build robust and scalable software solutions tailored to your requirements. 
            Whether you’re launching a new web application or updating an existing system, we’re here to help you every step of the way."
            buttonText="bi bi-chevron-right"
          />
          <ServiceCard
            image="/mentoring.svg"
            title={["Mentoring", "for", "Beginners"]}
            description="Our Mentoring for Beginners service provides aspiring coders with personalized guidance and support as
             they embark on their coding journey. We offer one-on-one mentoring sessions tailored to your individual learning needs, 
             covering fundamental programming concepts, project-based learning, and career guidance. Our curriculum is designed to help you build 
             a strong foundation in coding, develop problem-solving skills, and navigate the challenges of starting a career in tech. Whether you’re 
             interested in learning web or software development we’re here to help you succeed."
            buttonText="bi bi-chevron-right"
          />
        </ServicesContainer>
      </ServicesSection>
    </div>
  );
};

export default HomePage;
