<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add New Song</title>
  <!-- Bootstrap CSS CDN -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <h1>Add New Song</h1>
    <form action="{{ route('songs.store') }}" method="POST">
      @csrf
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" class="form-control" value="">
      </div>
      <div class="form-group">
        <label for="artist">Artist:</label>
        <input type="text" id="artist" name="artist" class="form-control" value="">
      </div>
      <div class="form-group">
        <label for="genre">Genre:</label>
        <input type="text" id="genre" name="genre" class="form-control" value="">
      </div>
      <div class="form-group">
        <label for="year">Year:</label>
        <input type="text" id="year" name="year" class="form-control" value="">
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
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
  <title>Add New Song</title>
</head>
<body>
  <h1>Add New Song</h1>
  <form action="{{ route('songs.store')}}" method="POST">
  @csrf
  <div>
    <label for="title">Title:</label>
    <input type="text" id="title" name="title" value="">
  </div>
  <div>
    <label for="artist">Artist:</label>
    <input type="text" id="artist" name="artist" value="">
  </div>
  <div>
    <label for="genre">Genre:</label>
    <input type="text" id="genre" name="genre" value="">
  </div>
  <div>
    <label for="year">Year:</label>
    <input type="text" id="year" name="year" value="">
  </div>
  <div>
    <button type="submit">Add</button>
  </div>
  </form>
</body>
</html> --}}
