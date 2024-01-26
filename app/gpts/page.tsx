import type { NextPage } from 'next';
import styles from '../styles/index.module.css';

// pages/MyGpts.js

import Head from 'next/head'
import Link from 'next/link'

export default function MyGpts() {
  return (
    <>
      <Head>
        <title>My GPTs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>

      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">My GPTs</h1>
        <ul>
          {/* Map through your GPTs array and replace 'temp_tiktok_marketing' with your GPT names */}
          <li className="mb-4">
            <Link href="/temp_tiktok_marketing">
              <a className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <i className="fas fa-cog text-gray-600 mr-3"></i>
                <span className="font-semibold">temp_tiktok_marketing</span>
              </a>
            </Link>
          </li>
          {/* Repeat for other GPTs */}
        </ul>
      </div>
    </>
  )
}
