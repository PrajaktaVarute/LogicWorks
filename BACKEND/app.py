from flask import Flask, request  
from routes.video_routes import video_blueprint, generate  
import os

app = Flask(__name__)


app.register_blueprint(video_blueprint)

@app.route('/generate', methods=['POST'])
def generate_video():
    data = request.json
    story = data.get('prompt')
    duration = int(data.get('duration', 1)) 
    return generate(story, duration)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 3000)))
