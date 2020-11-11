ALTER TABLE [dbo].[SubSystems]
ADD CONSTRAINT FK_System_SubSystem
FOREIGN KEY (Sys_Id) REFERENCES [dbo].[Systems](Sys_Id);




