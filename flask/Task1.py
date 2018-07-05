from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/view_image', methods=['GET', 'POST'])
def view_image():
    return render_template('view_image.html')


if __name__ == '__main__':
    app.run()
