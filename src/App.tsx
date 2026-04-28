/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import EventDetails from './pages/EventDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
}


