import React, { useState } from 'react';
import { loginPageStyles } from '../assets/style';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft, Lock, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    
    const navigate = useNavigate();
    const { token } = useParams();
    const API_BASE = import.meta.env.VITE_API_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.", {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.", {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
            return;
        }

        setSubmitting(true);

        try {
            const resp = await axios.post(`${API_BASE}/api/auth/reset-password/${token}`, {
                password,
            });

            if (resp.data.success) {
                toast.success("Password reset successful! Redirecting to login...", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "light",
                });
                setTimeout(() => navigate("/login"), 3000);
            }
        } catch (err) {
            const serverMsg = err?.response?.data?.message;
            toast.error(serverMsg || "Failed to reset password. Link may be invalid or expired.", {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={loginPageStyles.pageContainer} style={{ fontFamily: "'Playfair Display', serif" }}>
            <ToastContainer />
            <div className={loginPageStyles.mainContent}>
                <button onClick={() => navigate("/login")} className={loginPageStyles.backButton} >
                    <ArrowLeft className="h-5 w-5" />
                    <span className={loginPageStyles.backButtonText}>Back to Login</span>
                </button>

                <div className={loginPageStyles.loginCard}>
                    <div className={loginPageStyles.decorativeTopLeft}></div>
                    <div className={loginPageStyles.decorativeBottomRight}></div>

                    <h2 className={loginPageStyles.cardTitle}>Reset Password</h2>
                    <p className={loginPageStyles.cardSubtitle}>Enter your new password below</p>

                    <form onSubmit={handleSubmit}>
                        <div className={loginPageStyles.formField}>
                            <label htmlFor='password' className={loginPageStyles.formLabel}>New Password</label>
                            <div className={loginPageStyles.inputContainer}>
                                <div className={loginPageStyles.inputIconContainer}>
                                    <Lock className={loginPageStyles.inputIcon} />
                                </div>
                                <input
                                    disabled={submitting}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    type={showPassword ? "text" : "password"}
                                    id='password'
                                    className={loginPageStyles.inputBase}
                                    placeholder='New password'
                                />
                                <button
                                    type='button'
                                    className={loginPageStyles.passwordToggle}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Eye /> : <EyeOff />}
                                </button>
                            </div>
                        </div>

                        <div className={loginPageStyles.formField}>
                            <label htmlFor='confirmPassword' className={loginPageStyles.formLabel}>Confirm Password</label>
                            <div className={loginPageStyles.inputContainer}>
                                <div className={loginPageStyles.inputIconContainer}>
                                    <Lock className={loginPageStyles.inputIcon} />
                                </div>
                                <input
                                    disabled={submitting}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    type={showPassword ? "text" : "password"}
                                    id='confirmPassword'
                                    className={loginPageStyles.inputBase}
                                    placeholder='Confirm new password'
                                />
                            </div>
                        </div>

                        <button
                            type='submit'
                            disabled={submitting}
                            className={loginPageStyles.submitButton}
                        >
                            {submitting ? "Resetting..." : "Reset Password"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPasswordPage;
