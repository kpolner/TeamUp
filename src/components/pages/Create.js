//Create page
//sport, skill level, age range, time/date, place
//show event posted! with a link to the view page
import { PostEventButton } from "../page elements/PostEventButton";
export default function Create() {
    return (
        <section class="general" id="create">
        <div class="eventformwrapper" id="wrapper">
          <div class="container">
              <div class="tabs">
                  <ul>
                    <li class="sign_in_li">Create Event</li>
                  </ul>
              </div>
              <div class="input_field">
                  <input type="text" placeholder="Event Name" class="input" id="posteventnamefield" required />
              </div>
              <div class="input_field">
                  <input type="text" placeholder="Sport" class="input" id="postsportfield" required />
              </div>
              <div class="input_field" >
                  <select name="Skill level" placeholder="Skill level" class="input" id="postskilllevelfield" required>
                      <option value = "" disabled selected hidden>Skill level</option>
                      <option value = "Beginner">Beginner</option>
                      <option value = "Intermediate">Intermediate</option>
                      <option value = "Advanced">Advanced</option>
                  </select>
              </div>
              <div class="input_field">
                  <input type="date" placeholder="Date" class="input" id="postdatefield" required />
              </div>
              <div class="input_field">
                  <input type="time" placeholder="Time" class="input" id="posttimefield" required />
              </div>
              <div class="input_field">
                  <input type="text" placeholder="Location" class="input" id="postlocationfield" required />
              </div>
              <PostEventButton />
          </div>
      </div>
      </section> 
    );
  }