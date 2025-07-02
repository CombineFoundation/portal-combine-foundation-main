"use client";

import "./profile.css";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
  FaIdCard,
  FaGraduationCap,
} from "react-icons/fa";
import ADMIN from "../../images/ADMIN.png";

export default function Profile() {
  return (
    <div className="profile-container text-black">
      <div className="profile-wrapper">
        {/* Sidebar */}
        <div className="profile-box">
          <div className="profile-content">
            <Image
              src={ADMIN}
              alt="Avatar"
              className="avatar"
              width={100}
              height={100}
            />
            <h2 className="text-lg sm:text-xl font-semibold">Muhammad Ali</h2>
            <p className="email">muhammadali221@gmail.com</p>

            <div className="info">
              <div className="info-item">
                <FaPhoneAlt />
                <span>03127473404</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>Lorem Ipsum Is Simply Dummy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="info-boxes">
            <div className="info-box">
              <div className="label">
                <FaUser />
                <span>Full Name</span>
              </div>
              <p className="value">Muhammad Ali</p>

              <div className="label">
                <FaCalendarAlt />
                <span>Date Of Birth</span>
              </div>
              <p className="value">July 28, 2010</p>
            </div>

            <div className="info-box">
              <div className="label">
                <FaUser />
                <span>Gender</span>
              </div>
              <p className="value">Male</p>

              <div className="label">
                <FaIdCard />
                <span>CNIC</span>
              </div>
              <p className="value">42206856687</p>
            </div>
          </div>

          <div className="info-box">
            <div className="label">
              <FaGraduationCap />
              <span>Qualification</span>
            </div>
            <p className="value">Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
