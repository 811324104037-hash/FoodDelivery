# Problem Statement

## 1. Title

Food Ordering & Delivery Platform

## 2. Domain

Food Technology / Online Food Ordering and Delivery

## 3. Who is the user?

* **Customer** – Browse restaurants, view food items, place orders, make payments, and track deliveries.
* **Restaurant Staff / Owner** – Manage menu items, receive orders, update order status, and manage restaurant details.
* **Delivery Partner** – View assigned orders, pick up food, and update delivery status.

## 4. What problem are we solving?

Customers often face difficulties in finding restaurants, comparing food items, placing orders, and tracking deliveries through a convenient platform. Restaurants also need an efficient way to manage menus and customer orders. Delivery partners need a simple system to receive delivery assignments and update delivery status. This platform provides a centralized solution that connects customers, restaurants, and delivery partners.

## 5. Proposed Solution

The proposed Food Ordering & Delivery Platform allows customers to register, browse restaurants and menus, search for food items, add items to a cart, place orders, and make payments. Restaurants can manage their menus and process incoming orders. Delivery partners can view assigned orders and update delivery status. The system provides order tracking and notifications to improve the overall food ordering and delivery experience.

## 6. Core Entities / Database Tables

* User
* Restaurant
* MenuItem
* Cart
* Order
* OrderItem
* Payment
* Delivery

## 7. User Roles & Permissions

* **Customer** – Register/login, browse restaurants, view menus, add food to cart, place orders, make payments, and track orders.
* **Restaurant Admin** – Manage restaurant details, add/update/delete menu items, and accept or update orders.
* **Delivery Partner** – View assigned deliveries and update pickup and delivery status.

## 8. Success Criteria

A customer should be able to search for a restaurant, select food items, place an order, complete payment, and track the order status within a few minutes.

## 9. Out of Scope

* Grocery and non-food product delivery
* Restaurant table reservations
* Food preparation management inside the kitchen
* International delivery
* Advanced AI-based food recommendations

## 10. Chosen Track

Java (Spring Boot)
