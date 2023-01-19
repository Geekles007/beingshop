import {LinkMap} from "../models/LinkMap";

export const MENUS = new Map<string, Partial<LinkMap>>([
    ["electronics", {
        id: 1,
        title: "Electronics",
        list: [
            "Smartphones and accessories",
            "Video games and consoles",
            "Computers and tablets",
            "Cameras and photos",
            "Camera drones",
            "Refurbished",
            "Smart home",
            "Apple",
            "Samsung",
            "Portable audio and headphones",
            "Emerging brands",
            "Smart watches",
            "Deals",
            "Sell on eBay"
        ]
    }],
    ["motors", {
        id: 2,
        title: "Motors",
        list: [
            "Auto and truck parts",
            "Tools and supplies",
            "Turbo chargers",
            "Clothing and merchandise",
            "Shock absorbers",
            "Electronic and GPS",
            "Air intake",
            "Vintage pieces",
            "Motorcycle parts",
            "Body and frame",
            "Engines and parts",
            "Accessories",
            "Exhausts and systems",
            "Rims",
            "Deals",
            "Sell on eBay"
        ]
    }],
    ["fashions", {
        id: 3,
        title: "Fashion",
        list: [
            "Footwear",
            "Women's clothing",
            "Footwear for women",
            "Men's clothing",
            "Men's footwear",
            "Watches",
            "Jewelry",
            "Accessories for men",
            "Accessories for women",
            "Bags and wallets for women",
            "Mens sunglasses",
            "Womens sunglasess",
            "Sneakers",
            "Deals",
            "Sell on eBay"
        ]
    }],
    ["art", {
        id: 4,
        title: "Collectibles and Art",
        list: [
            "Collectibles",
            "Art",
            "Action figures",
            "Cartoon characters",
            "Movie and TV characters",
            "Diecast",
            "Musical memorabilia",
            "Sports memorabilia",
            "Trading card games",
            "Antiques",
            "Comics",
            "Funko pop",
            "Star Wars",
            "Deals",
            "Sell on eBay"
        ]
    }],
    ["sport", {
        id: 5,
        title: "Sport",
        list: [
            "Cycling",
            "Fitness, running and yoga",
            "Fitness Tech",
            "Fishing",
            "Camping",
            "Scooters",
            "Team sports",
            "Watersports",
            "Winter sports",
            "Box and MMA",
            "Swimming",
            "GPS & Running Watches",
            "Garmin",
            "Deals",
            "Sell on eBay"
        ]
    }],
    ["beauty", {
        id: 6,
        title: "Health & Beauty",
        list: [
            "Beauty",
            "Makeup",
            "Health",
            "K-Beauty",
            "Manicure and pedicure",
            "Hair products",
            "Skin products",
            "Orthopedic products",
            "Vitamins and food supplements",
            "Shaving and waxing",
            "Bath and personal hygiene",
            "Oral hygiene",
            "Massagers",
            "Deals",
            "Sell on eBay"
        ]
    }],
    ["industrial", {
        id: 7,
        title: "Industrial equipment",
        list: [
            "Dental healthcare",
            "Electronic equipment and supplies",
            "Metallurgy and manufacturing",
            "Motors and industrial automation",
            "Heavy equipment parts",
            "Light industrial tools",
            "Inspection, measurement and testing equipment",
            "Packing and shipping",
            "Office supplies and equipment",
            "Printing and graphic arts",
            "Restaurants and food service",
            "Maintenance and safety",
            "Retail and services",
            "Deals",
            "Sell on eBay"
        ]
    }],
    ["garden", {
        id: 8,
        title: "Home & Garden",
        list: [
            "Workshop Tools and Equipment",
            "Patio, garden and outdoors",
            "Home improvement",
            "Kitchen, dining and bar",
            "Lamps, lights and fans",
            "Interior decoration",
            "Home organization",
            "Home appliances",
            "Toys",
            "Pets",
            "Crafts",
            "Art supplies",
            "Musical instruments",
            "Jewelry and beads",
            "Deals",
            "Sell on eBay"
        ]
    }],
    ["deals", {
        id: 9,
        title: "Deals"
    }],
    ["sells", {
        id: 10,
        title: "Sells",
        list: [
            "How to create a listing",
            "Join our growth program",
            "Seller center",
            "Seller updates",
            "Seller customer service",
            "eBay managed payments",
            "Learn to sell",
            "eBay stores",
            "eBay fees",
            "Selling limits"
        ]
    }]
]);
