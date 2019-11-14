from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/game')
def game():
    return render_template('game.html')


@app.route('/game_over')
def game_over():
    return render_template('game_over.html')

@app.route('/next_level')
def winner():
    return render_template('winner.html')

if __name__ == '__main__':
    app.run(debug=True)