<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Song</title>
  <!-- Bootstrap CSS CDN -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <h1>Song List</h1>
    <!-- create -->
    <a href="{{ route('songs.create') }}" class="btn btn-primary mb-3">Add New Song</a>
    <table class="table table-bordered">
      <thead class="thead-light">
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        @foreach ($songs as $song)
        <tr>
          <td>{{ $song->title }}</td>
          <td>{{ $song->artist }}</td>
          <td>{{ $song->genre }}</td>
          <td>{{ $song->year }}</td>
          <td>
            <a href="{{ route('songs.edit', $song->id) }}" class="btn btn-warning btn-sm">Edit</a>
            <form action="{{ route('songs.destroy', $song->id) }}" method="POST" style="display: inline;">
              @csrf
              @method('DELETE')
              <button type="submit" class="btn btn-danger btn-sm">Delete</button>
            </form>
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
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
  <title>Song</title>
</head>
<body>
  <h1>Song List</h1>
  <!-- create -->
  <a href="{{ route('songs.create')}}">Add New Song</a>
  <table border="1">
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Genre</th>
        <th>Year</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($songs as $song)
      <tr>
        <td>{{$song->title}}</td>
        <td>{{$song->artist}}</td>
        <td>{{$song->genre}}</td>
        <td>{{$song->year}}</td>
        <td>
          <a href="{{route('songs.edit', $song->id)}}">Edit</a>
          <form action="
                  {{route('songs.destroy', $song->id)}}"
                  method="POST" style="display: inline;">
                  @csrf
                  @method('DELETE')
                  <button type="submit">Delete</button>
          </form>
        </td>
      </tr>
      @endforeach
    </tbody>
  </table>
</body>
</html> --}}
