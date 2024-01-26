import type { NextPage } from 'next';
import styles from '../styles/index.module.css';
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My GPTs</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
    }
  </style>
</head>

<body class="bg-white">
  <div class="max-w-2xl mx-auto py-10">
    <h1 class="text-3xl font-bold mb-6">My GPTs</h1>
    <ul>
      <!-- Repeat this list item for each GPT -->
      <li class="mb-4">
        <a href="LINK_URL" class="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
          <i class="fas fa-cog text-gray-600 mr-3"></i>
          <span class="font-semibold">temp_tiktok_marketing</span>
        </a>
      </li>
      <!-- ... More list items ... -->
    </ul>
  </div>
</body>

</html>
