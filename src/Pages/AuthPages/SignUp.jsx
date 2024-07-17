import React, { useEffect, useState } from 'react';
import Selector from './Selector';
import { useTheme } from '../../context/ThemeContext';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        pincode: '',
        role: '', // Assuming default role is CUSTOMER
    });
    const { theme, toggleTheme } = useTheme();
    const [roles, setRoles] = useState([]);
    useEffect(() => {
        // Replace with actual API call to fetch roles
        const fetchedRoles = ['CUSTOMER', 'SELLER', 'ADMIN'];
        setRoles(fetchedRoles);
    }, []);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send data to backend API
        console.log(formData);
    };

    return (
        <div className={` ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
            <div className={ `max-w-md mx-auto m-1 p-6  ${theme === 'light' ? 'bg-white' : 'bg-gray-600'} rounded shadow-md` }>
                <h2 className={ `text-2xl  ${theme === 'light' ? 'text-gray-800' : 'text-white'} font-bold mb-6` }>Signup</h2>
                <form onSubmit={ handleSubmit }>
                    <div className="mb-4">
                        <label htmlFor="firstName" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>First Name</label>
                        <input type="text" id="firstName" name="firstName" value={ formData.firstName } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>Last Name</label>
                        <input type="text" id="firstName" name="firstName" value={ formData.firstName } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>Email</label>
                        <input type="text" id="email" name="email" value={ formData.email } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>Mobile</label>
                        <input type="text" id="mobile" name="mobile" value={ formData.mobile } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>Password</label>
                        <input type="text" id="password" name="password" value={ formData.password } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="addressLine1" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>AddressLine1</label>
                        <input type="text" id="addressLine1" name="addressLine1" value={ formData.addressLine1 } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="addressLine2" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>
                            AddressLine2</label>
                        <input type="text" id="addressLine2" name="addressLine2" value={ formData.addressLine2 } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>City</label>
                        <input type="text" id="city" name="city" value={ formData.city } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="state" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>State</label>
                        <input type="text" id="state" name="state" value={ formData.state } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="pincode" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>PinCode</label>
                        <input type="text" id="pincode" name="pincode" value={ formData.pincode } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="role" className={ `block text-sm font-medium  ${theme === 'light' ? 'text-gray-800' : 'text-white'} ` }>Role</label>
                        <select id="role" name="role" value={ formData.role } onChange={ handleChange } className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="">Select Role</option>
                            { roles.map((role) => (
                                <option key={ role } value={ role }>{ role }</option>
                            )) }
                        </select>
                    </div>

                    {/* Repeat similar structure for other fields */ }
                    <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 mt-4">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp
