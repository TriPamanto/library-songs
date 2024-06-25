<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Song;

class SongFeatureTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    public function test_index_data(): void
    {
        $response = $this->get('/songs');

        $response->assertStatus(200);
    }
    public function test_store_data(): void
    {
        $song = Song::factory()->create();
        $response = $this->post('/songs', $song->toArray());
        $response->assertStatus(302);
        $this->assertDatabaseHas('songs', $song->toArray());
        $song->delete();
    }
    public function test_edit_data(): void
    {
        $song = Song::factory()->create();
        $response = $this->get('/songs/' . $song->id . '/edit');
        $response->assertStatus(200);
        $song->delete();
    }
    public function test_update_data(): void
    {
        $song = Song::factory()->create();

        $updateSongData = [
            'title' => 'Updated Title',
            'artist' => 'Updated Artist',
            'genre' => 'Updated Genre',
            'year' => 2025
        ];

        $response = $this->put('/songs/' . $song->id, $updateSongData);
        $response->assertStatus(302);
        $this->assertDatabaseHas('songs', $updateSongData);
        $song->delete();
    }
    public function test_delete_data(): void
    {
        $song = Song::factory()->create();
        $response = $this->delete('/songs/' . $song->id);
        $response->assertStatus(302);
        $this->assertDatabaseMissing('songs', ['id' => $song->id]);
        $song->delete();
    }
}
