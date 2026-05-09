import { useOptimistic, useState } from 'react';

// Helper to simulate a 2-second delay
const delay = (ms) => new Promise(res => setTimeout(res, ms));

export default function App() {
  // 1. Real State (Data from the server)
  const [skills, setSkills] = useState([
    { name: "React" },
    { name: "Node" }
  ]);

  // 2. Optimistic State (Temporary data for better UX)
  const [optimisticSkills, addOptimisticSkill] = useOptimistic(
    skills,
    (currentSkills, newSkillName) => [
      ...currentSkills, 
      { name: newSkillName, isSending: true } // Add temporary item
    ]
  );

  // 3. Handling the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.skill.value;

    addOptimisticSkill(name); // Step 1: Update UI instantly
    event.target.reset();     // Step 2: Clear input field
    
    await delay(2000);        // Step 3: Wait for "server" response
    
    setSkills(prev => [...prev, { name }]); // Step 4: Update real state
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'system-ui' }}>
      <h1>Skill Directory</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input type="text" name="skill" placeholder="Type a skill..." required />
        <button type="submit">Add Skill</button>
      </form>

      <ul style={{ padding: 0, listStyle: 'none' }}>
        {optimisticSkills.map((skill, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span style={{ color: skill.isSending ? '#aaa' : '#000' }}>
              {skill.name}
            </span>
            {skill.isSending && <small style={{ color: 'blue' }}> (Sending...)</small>}
          </li>
        ))}
      </ul>
    </div>
  );
}
