import React, { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';
import leetcodeLogo from '../assets/codingProfiles/leetcode.svg';
import codeforcesLogo from '../assets/codingProfiles/cf.svg';
import gfgLogo from '../assets/codingProfiles/gfg.svg';
import { motion } from 'framer-motion'; // ✅ Add this import

const platformDetails = {
  leetcode: {
    color: 'from-yellow-400 to-orange-500',
    logo: leetcodeLogo,
    api: (username) => ({
      solvedUrl: `https://leetcode-stats-api.herokuapp.com/${username}`,
      contestUrl: `https://alfa-leetcode-api.onrender.com/${username}/contest`,
    }),
    extractData: async ({ solvedUrl, contestUrl }) => {
      try {
        const [solvedRes, contestRes] = await Promise.all([
          fetch(solvedUrl),
          fetch(contestUrl),
        ]);

        const solvedData = await solvedRes.json();
        const contestData = await contestRes.json();

        return {
          totalSolved: solvedData.totalSolved || 'N/A',
          rating: contestData.contestRating ? Math.round(contestData.contestRating) : 'N/A',
        };
      } catch (err) {
        return {
          totalSolved: 'Error',
          rating: 'Error',
        };
      }
    },
  },
  codeforces: {
    color: 'from-blue-500 to-purple-600',
    logo: codeforcesLogo,
    getData: async (username) => {
      try {
        const [infoRes, statusRes] = await Promise.all([
          fetch(`https://codeforces.com/api/user.info?handles=${username}`),
          fetch(`https://codeforces.com/api/user.status?handle=${username}`),
        ]);

        const info = await infoRes.json();
        const status = await statusRes.json();

        const solvedSet = new Set();
        status.result.forEach((sub) => {
          if (sub.verdict === 'OK') solvedSet.add(sub.problem.contestId + '-' + sub.problem.index);
        });

        return {
          totalSolved: solvedSet.size,
          rating: info.result[0]?.rating || 'N/A',
        };
      } catch {
        return { totalSolved: 'N/A', rating: 'N/A' };
      }
    },
  },
  geeksforgeeks: {
    color: 'from-green-600 to-green-400',
    logo: gfgLogo,
    getData: async (username) => {
      try {
        const res = await fetch(`https://geeks-for-geeks-api.vercel.app/${username}`);
        const data = await res.json();

        return {
          totalSolved: data.totalProblemsSolved || 'N/A',
          rating: data.codingScore || 'N/A', // Use coding score here
        };
      } catch (err) {
        return {
          totalSolved: 'Error',
          rating: 'N/A',
        };
      }
    },
  },
};


const TechnicalProfileCard = ({
  platform,
  username,
  profileLink,
  fallbackStats = { totalSolved: 'N/A', rating: 'N/A' },
}) => {
  const [stats, setStats] = useState(fallbackStats);
  const [loading, setLoading] = useState(true);

  const normalizedPlatform = platform.toLowerCase();
  const platformData = platformDetails[normalizedPlatform];

  useEffect(() => {
    const fetchData = async () => {
      if (!platformData) return;

      try {
        let data;

        if (platformData.getData) {
          data = await platformData.getData(username);
        } else if (platformData.api && platformData.extractData) {
          const urls = platformData.api(username);
          data = await platformData.extractData(urls);
        }

        if (
          data &&
          data.totalSolved !== 'Error' &&
          data.rating !== 'Error'
        ) {
          setStats(data);
        }
      } catch (err) {
        console.error(`Error fetching ${platform} stats:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, platformData]);

  if (!platformData) return null;

  const ratingLabel = normalizedPlatform === 'geeksforgeeks' ? 'Coding Score' : 'Contest Rating';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br ${platformData.color} p-4 rounded-xl shadow-lg text-white w-full sm:w-[300px]`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={platformData.logo}
            alt={`${platform} logo`}
            className="w-6 h-6 md:w-8 md:h-8 object-contain bg-white rounded-full p-1"
          />
          <span className="capitalize text-md md:text-xl font-semibold">{platform}</span>
        </div>
        <a
          href={profileLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm underline hover:text-gray-200"
        >
          <FaLink /> Profile
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-between text-sm font-medium mt-2 gap-3 sm:gap-0">
        <div>
          <p className="text-xs sm:text-sm text-gray-100">Problems Solved</p>
          <p className="text-sm sm:text-base md:text-lg">
            {loading ? fallbackStats.totalSolved : stats.totalSolved}
          </p>
        </div>
        <div>
          <p className="text-xs sm:text-sm text-gray-100">{ratingLabel}</p>
          <p className="text-sm sm:text-base md:text-lg">
            {loading ? fallbackStats.rating : stats.rating}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnicalProfileCard;
