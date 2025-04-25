const MovieModel = require("../Models/movie.model");
const createMovie = async (req, res) => {
  const{title,genre,director,releaseYear,description}=req.body

  if(!title||!genre||!director||!releaseYear||!description)
  {
    return res.status(400).json({message:"All fields are required"})
  }

  try {
    const result=await MovieModel.create({ title,
      genre,
      director,
      releaseYear,
      description,})
    return res.status(201).json({message:"movie created successfully",movie:result})
  } catch (error) {
    return res.status(400).json({message:error.message})
  }


};
const ViewAllMovies = async (req, res) => {
  const { _id}= req.user;



  if (req.user._id!= _id) {
    return res.status(404).json({ message: "user not found" });
  }
  try {
    const result=await MovieModel.find()
    return res.status(200).json({message:"All movies",movies:result})
  } catch (error) {
    return res.status(400).json({message:error.message})
  }

};
const getSinglemovie=async(req,res)=>{
  const { _id}= req.user;
  const{movieId:id}=req.params
  console.log(id)

  if (req.user._id!= _id) {
    return res.status(404).json({ message: "user not found" });
  }
  try {
    const result=await MovieModel.findById(id)
    return res.status(200).json({message:"movie fetched successfully",movie:result})
  } catch (error) {
    return res.status(400).json({message:error.message})
  }
}
//updatemovie
const UpdateAMovie = async (req, res) => {
  const { movieId } = req.params;
  const userId = req.user?._id;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized: User not found" });
  }

  try {
   
    const updatedMovie = await MovieModel.findByIdAndUpdate(
      movieId,
      req.body, 
      { new: true } 
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.status(200).json({
      message: "Movie updated successfully",
      movie: updatedMovie,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const DeleteAMovie=async(req,res)=>{
  const { _id}= req.user;
  const{movieId:id}=req.params
  console.log(id)
  if (req.user._id!= _id) {
    return res.status(404).json({ message: "user not found" });
  }
  try {
    const result=await MovieModel.findByIdAndDelete(id)
    return res.status(200).json({message:"movie deleted successfully",movie:result})
  } catch (error) {
    return res.status(400).json({message:error.message})
  }
}
//Admin routes
const GetAllMoviesbyadmin = async (req, res) => {
  if(req.user.role!=="admin")
  {
    return res.status(400).json({message:"You can no access this route"})
  }
  try {
    const result=await MovieModel.find()
    return res.status(200).json({message:"All movies",movies:result})
  } catch (error) {
    return res.status(400).json({message:error.message})
  }
};
const DeleteAMoviebyadmin=async(req,res)=>{
    if(req.user.role!=="admin")
    {
      return res.status(400).json({message:"You can no access this route"})
    }
    // const{movieId:id}=req.params
    try {
      const result=await MovieModel.deleteMany({})
      return res.status(200).json({message:"movie deleted successfully",movie:result})
    } catch (error) {
      return res.status(400).json({message:error.message})
    }
}
const DeleteSingleAMoviebyadmin=async(req,res)=>{
  if(req.user.role!=="admin")
  {
    return res.status(400).json({message:"You can no access this route"})
  }
  const{movieId:id}=req.params
  try {
    const result=await MovieModel.findByIdAndDelete(id)
    return res.status(200).json({message:"movie deleted successfully",movie:result})
  } catch (error) {
    return res.status(400).json({message:error.message})
  }
}
module.exports = { createMovie, ViewAllMovies,getSinglemovie,UpdateAMovie,DeleteAMovie,GetAllMoviesbyadmin,DeleteAMoviebyadmin,DeleteSingleAMoviebyadmin};
