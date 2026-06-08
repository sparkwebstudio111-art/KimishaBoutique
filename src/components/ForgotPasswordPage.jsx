import React, { useState } from 'react';
import { loginPageStyles } from '../assets/style';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft, Mail } from 'lucide-react';
import axios from 'axios';

function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();
    const API_BASE = import.meta.env.VITE_API_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email address.", {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
            return;
        }

        setSubmitting(true);

        try {
            const resp = await axios.post(`${API_BASE}/api/auth/forgot-password`, {
                email: email.trim().toLowerCase(),
            });

            if (resp.data.success) {
                toast.success("Password reset link sent to your email!", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                });
                setEmail("");
            }
        } catch (err) {
            const serverMsg = err?.response?.data?.message;
            toast.error(serverMsg || "Failed to send reset link. Please try again.", {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={loginPageStyles.pageContainer} >
            <ToastContainer />
            <div className={loginPageStyles.mainContent}>
                <button onClick={() => navigate("/login")} className={loginPageStyles.backButton} >
                    <ArrowLeft className="h-5 w-5" />
                    <span className={loginPageStyles.backButtonText}>Back to Login</span>
                </button>

                <div className={loginPageStyles.loginCard}>
                    <div className={loginPageStyles.decorativeTopLeft}></div>
                    <div className={loginPageStyles.decorativeBottomRight}></div>

                    <h2 className={loginPageStyles.cardTitle}>Forgot Password</h2>
                    <p className={loginPageStyles.cardSubtitle}>Enter your email to receive a reset link</p>

                    <form onSubmit={handleSubmit}>
                        <div className={loginPageStyles.formField}>
                            <label htmlFor='email' className={loginPageStyles.formLabel}>Email Address</label>
                            <div className={loginPageStyles.inputContainer}>
                                <div className={loginPageStyles.inputIconContainer}>
                                    <Mail className={loginPageStyles.inputIcon} />
                                </div>
                                <input
                                    disabled={submitting}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    type='email'
                                    id='email'
                                    className={loginPageStyles.inputBase}
                                    placeholder='Enter your email here'
                                />
                            </div>
                        </div>

                        <button
                            type='submit'
                            disabled={submitting}
                            className={loginPageStyles.submitButton}
                        >
                            {submitting ? "Sending..." : "Send Reset Link"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
