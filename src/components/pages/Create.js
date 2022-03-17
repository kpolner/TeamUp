//Create page
//sport, skill level, age range, time/date, place
//show event posted! with a link to the view page
export default function Create() {
    return (
        <section class="general" id="create">
        <div class="wrapper" id="wrapper">
          <div class="container">
              <div class="tabs">
                  <ul>
                    <li class="sign_in_li">Create Event</li>
                  </ul>
              </div>
              <div class="input_field">
                  <input type="text" placeholder="Event Name" class="input" required />
              </div>
              <div class="input_field" >
                  <select name="Skill level" placeholder="Skill level" class="input" required>
                      <option value = "" disabled selected hidden>Skill level</option>
                      <option value = "Beginner">Beginner</option>
                      <option value = "Intermediate">Intermediate</option>
                      <option value = "Advanced">Advanced</option>
                  </select>
              </div>
              <div class="input_field">
              <select name="Ages" placeholder="Ages" class="input" required>
                      <option value = "" disabled selected hidden class="hidden-option">Ages</option>
                      <option value = "Children">Children</option>
                      <option value = "Teenagers">Teenagers</option>
                      <option value = "18+">18+</option>
                  </select>
              </div>
              <div class="input_field">
                  <input type="datetime-local" placeholder="Date" class="input" required />
              </div>
              <div class="input_field">
                  <input type="text" placeholder="Location" class="input" required />
              </div>
              <div class="btn"><a href="#">Post Event</a></div>
          </div>
      </div>
      </section> 
    );
  }