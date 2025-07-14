import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import loginIcon_1 from "@/assets/images/icon/google.png"
import loginIcon_2 from "@/assets/images/icon/facebook.png"
import SigninForm from "@/components/forms/SigninForm"
import SignupForm from "@/components/forms/SignupForm"

const tabs: string[] = ["Signin", "Signup",];

const SigninModalNew = () => {

   const [activeTab, setActiveTab] = useState(0);

   return (
      <>
         <div className="modal fade" id="loginModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-fullscreen modal-dialog-centered">
               <div className="container">
                  <div className="user-data-form modal-content">
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     <div className="form-wrapper m-auto">
                        <ul className="nav nav-tabs w-100">
                           {tabs.map((tab, index) => (
                              <li key={index} onClick={() => setActiveTab(index)} className="nav-item">
                                 <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                              </li>
                           ))}
                        </ul>
                        <div className="tab-content mt-30">
                           <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`}>
                              <div className="text-center mb-20">
                                 <h2>Signin</h2>
                              </div>
                              <SigninForm />
                              {
                                 activeTab === 0 &&
                                 <p className="fs-20 color-dark">Don&apos;t have an account? <a href="#" onClick={() => setActiveTab(1)}>Sign up</a></p>
                              }
                           </div>

                           <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                              <div className="text-center mb-20">
                                 <h2>Register</h2>
                              </div>
                              <SignupForm />
                              {
                                 activeTab === 1 &&
                                 <p className="fs-20 color-dark">Already have an account? <a href="#" onClick={() => setActiveTab(0)}>Signin</a></p>}

                           </div>
                        </div>

                        <div className="d-flex align-items-center mt-30 mb-10">
                           <div className="line"></div>
                           <span className="pe-3 ps-3 fs-6">OR</span>
                           <div className="line"></div>
                        </div>
                        <div className="row">
                           <div className="col-sm-6">
                              <Link href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                                 <Image src={loginIcon_1} alt="" />
                                 <span className="ps-3">Signup with Google</span>
                              </Link>
                           </div>
                           <div className="col-sm-6">
                              <Link href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                                 <Image src={loginIcon_2} alt="" />
                                 <span className="ps-3">Signup with Facebook</span>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default SigninModalNew
