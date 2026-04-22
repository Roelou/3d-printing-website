// This file contains functions for validating form inputs.

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateRequired = (value: string): boolean => {
    return value.trim() !== '';
};

export const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    return phoneRegex.test(phone);
};

export const validateDimensions = (dimensions: string): boolean => {
    const dimensionRegex = /^\d+(\.\d+)?(x\d+(\.\d+)?){2}$/; // Format: "width x height x depth"
    return dimensionRegex.test(dimensions);
};

export const validateQuantity = (quantity: number): boolean => {
    return Number.isInteger(quantity) && quantity > 0;
};