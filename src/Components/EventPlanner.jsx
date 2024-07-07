import React from 'react'; 
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            
            <header>
                <h1>Welcome to Escam Event Planner</h1>
            </header>

        <section className='description'> {/*Contains the initial description and the button get started*/}
        <p>
            Plan and organize the event of your dreams effortlessly with Escam Event Planner.
            From birthdays to corporate meetings, we've got you covered to make your dream true.
        </p>

        <button className='get-started-button'>Get Started</button>
        </section>

        <section className='events_categories'>{/*Contain all the event categories that the company and app covers*/}
        <ul>
            <h2>Social Events</h2>
            <li>Birthday Parties</li>
            <li>Anniversary Celebrations</li>
            <li>Wedding Receptions</li>
            <li>Baby Showers</li>
            <li>Graduation Parties</li>
            <li>Family Reunions</li>
        </ul>

        <ul>
            <h2>Entertaiment Events</h2>
            <li>Concerts</li>
            <li>Music Festivals</li>
            <li>Film screenings</li>
            <li>Comedy shows</li>
            <li>Art exhibitions</li>
            <li>Cultural events</li>
        </ul>

        <ul>
            <h2>Community Events</h2>
            <li>Fundraising Events</li>
            <li>Charity galas</li>
            <li>Volunteer drives</li>
            <li>Neighborhood block parties</li>
            <li>Community festivals</li>
            <li>Cultural celebrations</li>
        </ul>
        </section>

        <section className='features'>{/*Display the features this organization is providing services for*/}
        <ul>
            <h2>Features</h2>
            <li>Easy event creation and management</li>
            <li>Customizable event templates</li>
            <li>Guest list management</li>
            <li>Real-time collaboration</li>
            <li>Reminders and notifications</li>
        </ul>
        </section>

        <section className='testimonials'>  {/*Display testimonials given by clients*/}
            <h2>Testimonials</h2>
            <div className='testimonial'>
                <p>"Escam Event Planner made organizating my weeding a breeze. Highly recommended!"</p>
                <p className='author'>- John Smith</p>

                <p>"They created the most cute Baby Shower for us, it was something ubelievable"</p>
                <p className='author'>- Sarah Rogers</p>

                <p>"I always give all my corporate events to Escam Event Planner because I do not have to worry about anything"</p>
                <p className='author'>- Kenedy Dutton</p>
            </div>
        </section>

        <section className="contact"> {/*Let visitors reach out to the organization*/}
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea placeholder='Message'></textarea>
                <button className='submit-button'>Send</button>
            </form>

        </section>
        <Footer/>
        </div>
    );
};

export default EventPlanner;
