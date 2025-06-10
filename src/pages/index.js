import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [field, setField] = useState('');
  const [data, setData] = useState({});
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic logic for recommending a scheme (extend as needed)
    if (field === 'education' && data.gender === 'female') {
      setRecommendation('You may be eligible for the Pragati Scholarship for Girls.');
    } else if (field === 'agriculture') {
      setRecommendation('You may be eligible for the PM-KISAN Scheme.');
    } else {
      setRecommendation('Please check the eligibility criteria on the official government portal.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="main-container">
      <h1>Welcome to Scheme Genie</h1>
      <p>Your personalized government scheme recommender system.</p>

      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/about">About</Link> |{' '}
        <Link href="/contact">Contact</Link> |{' '}
        <Link href="/schemes">Schemes</Link>
      </nav>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <label>
          Select Field:
          <select value={field} onChange={(e) => setField(e.target.value)} required>
            <option value="">--Choose Field--</option>
            <option value="education">Education</option>
            <option value="agriculture">Agriculture</option>
            <option value="employment">Employment</option>
          </select>
        </label>

        <br /><br />

        {/* Common Inputs */}
        <label>
          Gender:
          <input type="text" name="gender" onChange={handleInputChange} required />
        </label>
        <br /><br />
        <label>
          Income:
          <input type="text" name="income" onChange={handleInputChange} required />
        </label>
        <br /><br />
        <label>
          Religion/Caste:
          <input type="text" name="religion" onChange={handleInputChange} required />
        </label>
        <br /><br />

        {/* Conditional Inputs */}
        {field === 'agriculture' && (
          <>
            <label>
              Crop Type:
              <input type="text" name="crop" onChange={handleInputChange} required />
            </label>
            <br /><br />
            <label>
              Land Area:
              <input type="text" name="landArea" onChange={handleInputChange} required />
            </label>
            <br /><br />
            <label>
              Market Price:
              <input type="text" name="marketPrice" onChange={handleInputChange} required />
            </label>
            <br /><br />
          </>
        )}

        {field === 'education' && (
          <>
            <label>
              Qualification:
              <input type="text" name="qualification" onChange={handleInputChange} required />
            </label>
            <br /><br />
            <label>
              Guardian's Occupation:
              <input type="text" name="guardianOccupation" onChange={handleInputChange} required />
            </label>
            <br /><br />
          </>
        )}

        <button type="submit">Get Recommendation</button>
      </form>

      {recommendation && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Recommended Scheme: {recommendation}
        </div>
      )}
    </div>
  );
}
