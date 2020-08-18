<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        if (request()->wantsJson()) {
            return Service::where('sector_id', request('sector'))->get();
        }
    }
}
