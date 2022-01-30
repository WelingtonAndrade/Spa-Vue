<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function index()
    {
        $blogs = Blog::all();
        return response()->json(
            $blogs,200
        );
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $blog = Blog::create($request->all());
        return response()->json(
            $blog,201
        );
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Blog $blog)
    {

        return response()->json(
            $blog,200
        );
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Blog $blog)
    {
        $blog->update($request->all());
        return response()->json([
            $blog,
            200
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json(
            $blog,
            200,
        );
    }
}
