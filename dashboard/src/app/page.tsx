import AppAreachart from "@/components/AppAreachart";
import AppBarchart from "@/components/AppBarchart";
import AppPiechart from "@/components/AppPiechart";
import CardList from "@/components/CardList";
import ToDoList from "@/components/ToDoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-2 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarchart /></div>
      <div className="bg-primary-foreground p-2 rounded-lg"><CardList title="Latest Trasactions" /></div>
      <div className="bg-primary-foreground p-2 rounded-lg"><AppPiechart /></div>
      <div className="bg-primary-foreground p-2 rounded-lg"><ToDoList /></div>
      <div className="bg-primary-foreground p-2 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppAreachart /></div>
      <div className="bg-primary-foreground p-2 rounded-lg"><CardList title="Popular Products" /></div>
    </div>
  );
}