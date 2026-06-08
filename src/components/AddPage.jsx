import React, { useEffect, useRef, useState } from 'react'
import { themes, themeButtonColors, classes, getInputClass } from "../assets/adminStyle.js"
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"
import { Image, PlusCircle, Trash2, Upload } from "lucide-react"
import AdminNavbar from './AdminNavbar.jsx';

function AddPage() {

    const [image, setImage] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeColor, setActiveColor] = useState("purple");
    const [categoryName, setCategoryName] = useState("all");

    const [sizes, setSizes] = useState([]);

    const inputRef = useRef(null);
    const API_BASE = import.meta.env.VITE_API_BASE_URL;

    const SIZES = ["S", "M", "XL", "XXL", "default"];

    const theme = themes[activeColor];
    const inputClass = getInputClass(theme);

    useEffect(() => {
        if (!image) {
            setImagePreviewUrl("");
            return;
        }
        const url = URL.createObjectURL(image);
        setImagePreviewUrl(url);
        return () => URL.revokeObjectURL(url);
    }, [image]);

    const clearFileInput = () => {
        if (inputRef.current) inputRef.current.value = "";
        setImage(null);
        setImagePreviewUrl("");
    };

    const handleImageChange = (e) => {
        const f = e.target.files?.[0];
        if (!f) return;

        if (!f.type.startsWith("image/"))
            return toast.error("Please select an image file");

        if (f.size > 5 * 1024 * 1024)
            return toast.error("Image too large (max 5MB)");

        setImage(f);
    };

    const resetForm = () => {
        setName("");
        setDesc("");
        setPrice("");
        setCategoryName("all");
        setSizes([]);
        clearFileInput();
    };

    const toggleSize = (s) => {
        setSizes(prev => {
            const exists = prev.find(item => item.size === s);

            if (exists) {
                return prev.filter(item => item.size !== s);
            }

            return [...prev, { size: s, quantity: 1 }];
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image || !name.trim() || !desc.trim() || !price.trim())
            return toast.error("Please fill all fields and select an image.");

        if (isNaN(Number(price)) || Number(price) <= 0)
            return toast.error("Enter a valid price greater than 0.");

        if (sizes.length === 0)
            return toast.error("Please select at least one size.");

        setLoading(true);

        try {
            const formData = new FormData();

            formData.append("image", image);
            formData.append("name", name.trim());
            formData.append("description", desc.trim());
            formData.append("price", Number(price));
            formData.append("category", categoryName);
            formData.append("sizes", JSON.stringify(sizes));

            const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
            await axios.post(`${API_BASE}/api/products`, formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            toast.success("Product added successfully!");
            resetForm();

        } catch (err) {
            toast.error("Failed to add Product.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div>
                <AdminNavbar />
            </div>
            <div>
                <div className={`${classes.pageContainer} ${theme.bg}`}>
                    <ToastContainer position='top-right' autoClose={2500} />

                    <div className={classes.maxWidthContainer}>

                        {/* HEADER */}
                        <div className={classes.headerContainer}>
                            <h1 className={classes.headerTitle}>
                                Add new Products
                            </h1>

                            <div className={classes.themeButtonsContainer}>
                                {["purple", "blue", "grey"].map((c) => (
                                    <button
                                        key={c}
                                        className={`${classes.themeButton(activeColor === c)} ${themeButtonColors[c]}`}
                                        onClick={() => setActiveColor(c)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* GRID */}
                        <div className={classes.gridContainer}>

                            {/* ================= LEFT FORM (UNCHANGED) ================= */}
                            <form onSubmit={handleSubmit} className={classes.formContainer(theme)}>

                                {/* IMAGE */}
                                <div>
                                    <div className={classes.formLabel}>
                                        <Upload className="w-4 h-4" /> Product Image
                                        <span className={classes.requiredStar}>*</span>
                                    </div>

                                    <div className="block space-y-5 sm:flex items-center gap-4">
                                        <div className={`${classes.imagePreviewContainer(theme)} ${imagePreviewUrl ? "" : classes.imagePreviewEmpty}`}>
                                            {imagePreviewUrl ? (
                                                <img src={imagePreviewUrl} alt="preview" className='w-full h-full object-cover' />
                                            ) : (
                                                <div className={classes.imagePlaceholder}>
                                                    <Image className="w-8 h-8" />
                                                    <div className='text-xs'>No Image</div>
                                                </div>
                                            )}
                                        </div>

                                        <div className='flex-1 space-y-2 space-x-2'>
                                            <label htmlFor='watch-image' className={classes.uploadButton}>
                                                <PlusCircle className='w-4 h-4 text-green-800' />
                                                <span className='text-green-800'>Choose Image</span>
                                                <input
                                                    id='watch-image'
                                                    ref={inputRef}
                                                    type='file'
                                                    accept='image/*'
                                                    onChange={handleImageChange}
                                                    className='hidden'
                                                />
                                            </label>

                                            {imagePreviewUrl && (
                                                <button type='button' onClick={clearFileInput} className={classes.removeButton}>
                                                    <Trash2 className='w-4 h-4 text-green-800' /> Remove
                                                </button>
                                            )}

                                            <p className={classes.helperText}>Max size: 5MB</p>
                                        </div>
                                    </div>
                                </div>

                                {/* NAME */}
                                <div>
                                    <div className={classes.formLabelSimple}>Product Name*</div>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className={inputClass}
                                    />
                                </div>

                                {/* CATEGORY */}
                                <div>
                                    <div className={classes.formLabelSimple}>Category*</div>
                                    <select
                                        value={categoryName}
                                        onChange={(e) => setCategoryName(e.target.value)}
                                        className={inputClass}
                                    >
                                        <option value="all">all</option>
                                        <option value="saree">saree</option>
                                        <option value="halfsaree">halfsaree</option>
                                        <option value="aariwork">aariwork</option>
                                        <option value="formalwear">formalwear</option>
                                        <option value="tissue">tissue</option>
                                        <option value="westernwear">westernwear</option>
                                        <option value="anarkali">anarkali</option>
                                        <option value="blouse">blouse</option>
                                        <option value="partywear">partywear</option>
                                    </select>
                                </div>

                                {/* SIZE */}
                                <div>
                                    <div className={classes.formLabelSimple}>
                                        Size & Quantity*
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-2">
                                        {SIZES.map((s) => {
                                            const active = sizes.find(i => i.size === s);

                                            return (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => toggleSize(s)}
                                                    className={`px-4 py-2 cursor-pointer rounded-xl border text-sm font-medium
                                            ${active
                                                            ? "bg-purple-100 text-black border-black"
                                                            : "bg-white text-purple-700 border-black-300"
                                                        }`}
                                                >
                                                    {s}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        {sizes.map((item) => (
                                            <div key={item.size} className="flex items-center gap-3">
                                                <span className="w-10 text-purple-900 font-semibold">{item.size}</span>

                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={item.quantity}
                                                    onChange={(e) => {
                                                        const value = Number(e.target.value);

                                                        setSizes(prev =>
                                                            prev.map(s =>
                                                                s.size === item.size
                                                                    ? { ...s, quantity: value }
                                                                    : s
                                                            )
                                                        );
                                                    }}
                                                    className="border px-2 py-1 bg-purple-100 rounded w-24"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* DESCRIPTION */}
                                <div>
                                    <div className={classes.formLabelSimple}>Description*</div>
                                    <textarea
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                        className={inputClass}
                                    />
                                </div>

                                {/* PRICE */}
                                <div>
                                    <div className={classes.formLabelSimple}>Price*</div>
                                    <input
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className={inputClass}
                                    />
                                </div>

                                <button type="submit" disabled={loading} className={classes.submitButton(theme, loading)}>
                                    <PlusCircle />
                                    {loading ? "Adding..." : "Add Product"}
                                </button>

                            </form>

                            {/* ================= RIGHT PREVIEW (ONLY ADDED) ================= */}
                            <div className={classes.formContainer(theme)}>

                                <h2 className={classes.formLabelSimple}>
                                    Live Preview
                                </h2>

                                {imagePreviewUrl ? (
                                    <img
                                        src={imagePreviewUrl}
                                        className="w-full h-44 object-contain rounded-xl mt-3"
                                    />
                                ) : (
                                    <div className="w-full h-44 flex items-center justify-center border rounded-xl mt-3">
                                        No Image
                                    </div>
                                )}

                                <div className='block md:flex justify-center space-x-5 space-y-4'>
                                    <p className="text-sm md:text-xl font-semibold text-center">{name || "Product Name"}</p>
                                    <p className="text-sm md:text-md mt-2 text-gray-500 text-center">({categoryName})</p>
                                </div>
                                <p className="text-sm text-center">{desc || "Description"}</p>

                                <div className="mt-3 space-y-1">
                                    {sizes.length === 0 ? (
                                        <p className="text-gray-400 text-sm">No sizes selected</p>
                                    ) : (
                                        sizes.map(s => (
                                            <div key={s.size} className="flex justify-between bg-gray-100 px-3 py-1 rounded">
                                                <span>{s.size}</span>
                                                <span>Qty: {s.quantity}</span>
                                            </div>
                                        ))
                                    )}
                                </div>

                                <p className="text-yellow-700 font-bold mt-2">
                                    ₹ {price || 0}
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPage;