/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import EventDetails from './pages/EventDetails';
import Gatherings from './pages/Gatherings';
import Research from './pages/Research';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/gatherings" element={<Gatherings />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </BrowserRouter>
  );
}


