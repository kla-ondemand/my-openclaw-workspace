# API Specification

## SFD Pocket - RESTful API Reference

**Version:** 0.3.0  
**Base URL:** `/api`  
**Protocol:** HTTPS  
**Format:** JSON

---

## Table of Contents

1. [Authentication](#1-authentication)
2. [Users](#2-users)
3. [Booths](#3-booths)
4. [Stamps](#4-stamps)
5. [Rewards](#5-rewards)
6. [Admin](#6-admin)
7. [Error Handling](#7-error-handling)

---

## Common Specifications

### Base URL

```
Production: https://sfd-pocket-poc.vercel.app/api
Development: http://localhost:3000/api
```

### Authentication

Most endpoints require Bearer token authentication:

```http
Authorization: Bearer <jwt_token>
```

### Response Format

All responses are JSON with the following structure:

**Success (2xx):**
```json
{
  "data": { ... },
  "message": "Optional success message"
}
```

**Error (4xx, 5xx):**
```json
{
  "error": "Error code",
  "message": "Human-readable error message",
  "details": { ... } // Optional additional details
}
```

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Missing/invalid token |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 409 | Conflict - Resource already exists |
| 500 | Internal Server Error |

---

## 1. Authentication

### 1.1 User Registration/Login

Register a new user or login existing user.

**Endpoint:** `POST /users`

**Auth Required:** No

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "John Doe" // Optional
}
```

**Response (200/201):**
```json
{
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Errors:**
- `400` - Email is required
- `500` - Failed to create user

---

### 1.2 Get Current User

Get the currently authenticated user's profile.

**Endpoint:** `GET /auth/me`

**Auth Required:** Yes (User)

**Headers:**
```http
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

**Errors:**
- `401` - Authentication required / Invalid token

---

### 1.3 Admin Login

Login to admin portal.

**Endpoint:** `POST /auth/admin`

**Auth Required:** No

**Request Body:**
```json
{
  "password": "admin_password"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Errors:**
- `401` - Invalid password

---

## 2. Users

### 2.1 Get User Stamps

Get all stamps collected by a specific user.

**Endpoint:** `GET /users/:id/stamps`

**Auth Required:** Yes (User)

**Headers:**
```http
Authorization: Bearer <token>
```

**Path Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id | UUID | User ID |

**Response (200):**
```json
{
  "stamps": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "userId": "550e8400-e29b-41d4-a716-446655440000",
      "boothId": "550e8400-e29b-41d4-a716-446655440002",
      "createdAt": "2026-02-06T10:00:00.000Z",
      "booth": {
        "id": "550e8400-e29b-41d4-a716-446655440002",
        "slug": "registration",
        "name": "Registration Booth",
        "nameTh": "บูธลงทะเบียน",
        "icon": "📝"
      }
    }
  ]
}
```

**Errors:**
- `401` - Authentication required
- `500` - Failed to fetch stamps

---

## 3. Booths

### 3.1 List Active Booths

Get all active booths for user app.

**Endpoint:** `GET /booths`

**Auth Required:** Yes (User)

**Headers:**
```http
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "booths": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440002",
      "slug": "registration",
      "name": "Registration Booth",
      "nameTh": "บูธลงทะเบียน",
      "icon": "📝",
      "description": "Register for the event",
      "isActive": true
    }
  ]
}
```

**Errors:**
- `500` - Failed to fetch booths

---

## 4. Stamps

### 4.1 Collect Stamp

Collect a stamp at a booth.

**Endpoint:** `POST /stamps`

**Auth Required:** Yes (User)

**Headers:**
```http
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "boothId": "550e8400-e29b-41d4-a716-446655440002",
  "boothSlug": "registration" // Alternative to boothId
}
```

**Response (201):**
```json
{
  "message": "Stamp collected successfully",
  "stamp": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "userId": "550e8400-e29b-41d4-a716-446655440000",
    "boothId": "550e8400-e29b-41d4-a716-446655440002",
    "createdAt": "2026-02-06T10:00:00.000Z",
    "booth": {
      "id": "550e8400-e29b-41d4-a716-446655440002",
      "slug": "registration",
      "name": "Registration Booth",
      "nameTh": "บูธลงทะเบียน",
      "icon": "📝"
    }
  }
}
```

**Errors:**
- `400` - Invalid request (boothId or boothSlug required)
- `401` - Authentication required
- `404` - Booth not found or inactive
- `409` - Stamp already collected
- `500` - Failed to collect stamp

---

## 5. Rewards

### 5.1 Claim Reward

Claim a reward (requires sufficient stamps).

**Endpoint:** `POST /rewards/claim`

**Auth Required:** Yes (User)

**Headers:**
```http
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "rewardId": "550e8400-e29b-41d4-a716-446655440003"
}
```

**Response (201):**
```json
{
  "message": "Reward claimed successfully",
  "claim": {
    "id": "550e8400-e29b-41d4-a716-446655440004",
    "reward": {
      "id": "550e8400-e29b-41d4-a716-446655440003",
      "name": "Premium Kit",
      "description": "Exclusive event merchandise"
    },
    "status": "pending"
  }
}
```

**Errors:**
- `400` - Not enough stamps / Reward already claimed
- `401` - Authentication required
- `404` - Reward not found or inactive
- `409` - Reward already claimed
- `500` - Failed to claim reward

---

## 6. Admin

### 6.1 Get Dashboard Statistics

Get admin dashboard statistics.

**Endpoint:** `GET /admin/stats`

**Auth Required:** Yes (Admin)

**Headers:**
```http
Authorization: Bearer <admin_token>
```

**Response (200):**
```json
{
  "stats": {
    "totalUsers": 150,
    "totalStamps": 420,
    "completionRate": 35,
    "activeNow": 25,
    "boothStats": [
      {
        "id": "550e8400-e29b-41d4-a716-446655440002",
        "name": "Registration Booth",
        "stamps": 145,
        "target": 500
      }
    ]
  }
}
```

**Errors:**
- `401` - Unauthorized
- `500` - Failed to fetch stats

---

### 6.2 List All Booths (Admin)

Get all booths including inactive (admin view).

**Endpoint:** `GET /admin/booths`

**Auth Required:** Yes (Admin)

**Headers:**
```http
Authorization: Bearer <admin_token>
```

**Response (200):**
```json
{
  "booths": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440002",
      "slug": "registration",
      "name": "Registration Booth",
      "nameTh": "บูธลงทะเบียน",
      "icon": "📝",
      "description": "Register for the event",
      "isActive": true,
      "stamps": 145,
      "createdAt": "2026-02-01T00:00:00.000Z"
    }
  ]
}
```

**Errors:**
- `401` - Unauthorized
- `500` - Failed to fetch booths

---

### 6.3 Create Booth

Create a new booth.

**Endpoint:** `POST /admin/booths`

**Auth Required:** Yes (Admin)

**Headers:**
```http
Authorization: Bearer <admin_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "slug": "main-stage",
  "name": "Main Stage",
  "nameTh": "เวทีหลัก",
  "icon": "🎤",
  "description": "Main presentation stage"
}
```

**Field Constraints:**
| Field | Type | Required | Constraints |
|-------|------|----------|-------------|
| slug | string | Yes | Unique, URL-safe (lowercase, hyphens) |
| name | string | Yes | 1-100 characters |
| nameTh | string | No | Thai name |
| icon | string | No | Emoji or short string |
| description | string | No | Max 500 characters |

**Response (201):**
```json
{
  "booth": {
    "id": "550e8400-e29b-41d4-a716-446655440005",
    "slug": "main-stage",
    "name": "Main Stage",
    "nameTh": "เวทีหลัก",
    "icon": "🎤",
    "description": "Main presentation stage",
    "isActive": true,
    "createdAt": "2026-02-06T10:00:00.000Z"
  }
}
```

**Errors:**
- `400` - Slug and name are required / Validation failed
- `401` - Unauthorized
- `409` - Slug already exists
- `500` - Failed to create booth

---

### 6.4 Delete Booth

Delete a booth and all related stamps.

**Endpoint:** `DELETE /admin/booths/:id`

**Auth Required:** Yes (Admin)

**Headers:**
```http
Authorization: Bearer <admin_token>
```

**Path Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id | UUID | Booth ID |

**Response (200):**
```json
{
  "message": "Booth deleted successfully"
}
```

**Errors:**
- `401` - Unauthorized
- `404` - Booth not found
- `500` - Failed to delete booth

---

### 6.5 List All Users

Get all users with stamp counts.

**Endpoint:** `GET /admin/users`

**Auth Required:** Yes (Admin)

**Headers:**
```http
Authorization: Bearer <admin_token>
```

**Response (200):**
```json
{
  "users": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "email": "user@example.com",
      "name": "John Doe",
      "stampCount": 5,
      "progress": 71,
      "lastActive": "2026-02-06T10:00:00.000Z",
      "createdAt": "2026-02-01T00:00:00.000Z"
    }
  ]
}
```

**Errors:**
- `401` - Unauthorized
- `500` - Failed to fetch users

---

### 6.6 List All Claims

Get all reward claims.

**Endpoint:** `GET /admin/claims`

**Auth Required:** Yes (Admin)

**Headers:**
```http
Authorization: Bearer <admin_token>
```

**Response (200):**
```json
{
  "claims": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440004",
      "user": {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "email": "user@example.com",
        "name": "John Doe"
      },
      "reward": {
        "id": "550e8400-e29b-41d4-a716-446655440003",
        "name": "Premium Kit",
        "description": "Exclusive event merchandise"
      },
      "status": "pending",
      "claimedAt": "2026-02-06T10:00:00.000Z"
    }
  ]
}
```

**Errors:**
- `401` - Unauthorized
- `500` - Failed to fetch claims

---

### 6.7 Update Claim Status

Update the status of a claim.

**Endpoint:** `PATCH /admin/claims`

**Auth Required:** Yes (Admin)

**Headers:**
```http
Authorization: Bearer <admin_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "claimId": "550e8400-e29b-41d4-a716-446655440004",
  "status": "approved" // "pending", "approved", or "rejected"
}
```

**Response (200):**
```json
{
  "claim": {
    "id": "550e8400-e29b-41d4-a716-446655440004",
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "email": "user@example.com",
      "name": "John Doe"
    },
    "reward": {
      "id": "550e8400-e29b-41d4-a716-446655440003",
      "name": "Premium Kit"
    },
    "status": "approved",
    "claimedAt": "2026-02-06T10:00:00.000Z"
  }
}
```

**Errors:**
- `400` - Invalid claimId or status
- `401` - Unauthorized
- `500` - Failed to update claim

---

## 7. Error Handling

### 7.1 Error Response Format

All errors follow this format:

```json
{
  "error": "ERROR_CODE",
  "message": "Human-readable description"
}
```

### 7.2 Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `Unauthorized` | 401 | Missing or invalid token |
| `Forbidden` | 403 | Valid token but insufficient permissions |
| `Not found` | 404 | Resource does not exist |
| `Already exists` | 409 | Resource already exists (duplicate) |
| `Validation failed` | 400 | Input validation error |
| `Authentication required` | 401 | No token provided |
| `Invalid token` | 401 | Token is invalid or expired |

### 7.3 Validation Errors

When validation fails, the response includes details:

```json
{
  "error": "Validation failed",
  "message": "Invalid input data",
  "details": [
    {
      "field": "email",
      "message": "Valid email is required"
    },
    {
      "field": "slug",
      "message": "Slug must be unique"
    }
  ]
}
```

---

## 8. Rate Limiting

Currently no rate limiting is implemented for the POC. For production:

| Endpoint | Limit | Window |
|----------|-------|--------|
| All endpoints | 100 | 1 minute |
| Stamp collection | 10 | 1 minute |
| Admin endpoints | 60 | 1 minute |

---

*End of API Specification*
