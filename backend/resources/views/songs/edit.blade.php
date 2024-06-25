<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit Song</title>
  <!-- Bootstrap CSS CDN -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <h1>Edit Song</h1>

    <form action="{{ route('songs.update', $song->id) }}" method="POST">
      @csrf
      @method('PUT')
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" name="title" id="title" class="form-control" value="{{ $song->title }}">
      </div>
      <div class="form-group">
        <label for="artist">Artist:</label>
        <input type="text" name="artist" id="artist" class="form-control" value="{{ $song->artist }}">
      </div>
      <div class="form-group">
        <label for="genre">Genre:</label>
        <input type="text" name="genre" id="genre" class="form-control" value="{{ $song->genre }}">
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="text" name="year" id="year" class="form-control" value="{{ $song->year }}">
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
  <!-- Bootstrap JS and dependencies -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>


{{-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit Song</title>
</head>
<body>
  <h1>Edit Song</h1>

  <form action="{{route('songs.update', $song->id)}}" method="POST">
  @csrf
  @method ('PUT')
  <div>
    <label for="title">Title:</label>
    <input type="text" name="title" id="title" value="{{$song->title}}">
  </div>
  <div>
    <label for="artist">Artist:</label>
    <input type="text" name="artist" id="artist" value="{{$song->artist}}">
  </div>
  <div>
    <label for="genre">Genre:</label>
    <input type="text" name="genre" id="genre" value="{{$song->genre}}">
  </div>
  <div>
    <label for="year">Year:</label>
    <input type="text" name="year" id="year" value="{{$song->year}}">
  </div>
  <div>
    <button type="submit">Update</button>
  </div>
  </form>
</body>
</html> --}}
