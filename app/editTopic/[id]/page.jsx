
import EditTopicForm from "@/components/EditTopicForm";

const getTopicById =async(id)=>{
    try {
      const res= await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/topics/${id}`,{
        cache:"no-store",
      })
      if(!res.ok){
        throw new Error("failed to fetch topic");
      }
      return res.json();
    } catch (error) {
      console.log(error);
    }
}


const EditTopicPage = async({ params }) => {
  const { id } = params;
  const {topic}=await getTopicById(id);
  const {title,description}=topic;
  return (
    <div>
      <EditTopicForm id={id} title={title} description={description}/>
    </div>
  );
};

export default EditTopicPage;
