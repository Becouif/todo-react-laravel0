<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

// import this response to use Response 
// use Illuminate\Http\Response;

// this need to be import too 
// ACTUAL INMPORTS 
use Inertia\Inertia;
use Inertia\Response;

// use for store method 
use Illuminate\Http\RedirectResponse;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index():Response
    {
        // how to render a jsx file instead of a view for reactjs or vue 
        return Inertia::render('Todo/Index',[
            //
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        // this work like usual 
        // every input tag with name can be seen here
        $validated = $request->validate([
            'todo' => 'required|string|max:200'
        ]);
        $todo = $request->get('todo');
        Todo::create([
            'todo' => $todo
        ]);
        return redirect(route('todo.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        //
    }
}
