# AIzaSyCAR7cHFoDqSUNr-OGrilkl6ZWzNWLRmRc
from flask import Flask, render_template, request
from ai_helper import generate_study_plan

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    plan = None

    if request.method == "POST":
        subject = request.form["subject"]
        days = request.form["days"]
        level = request.form["level"]
        hours = request.form["hours"]
        syllabus = request.form["syllabus"]

        plan = generate_study_plan(subject, days, level, hours, syllabus)

    return render_template("index.html", plan=plan)

if __name__ == "__main__":
    app.run(debug=True)